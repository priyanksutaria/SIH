import audioread
import numpy as np
import speech_recognition as sr
from textblob import TextBlob
import librosa
import nltk
import re
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from pydub import AudioSegment
nltk.download('punkt')
nltk.download('stopwords')

# Function to load audio file using audioread
def load_audio_with_audioread(audio_file):
    with audioread.audio_open(audio_file) as f:
        sr = f.samplerate
        n_channels = f.channels
        total_samples = f.duration * sr
        audio_data = np.zeros(int(total_samples * n_channels), dtype=np.float32)
        i = 0
        for buf in f:
            audio_array = np.frombuffer(buf, dtype=np.int16).astype(np.float32)
            audio_data[i:i+len(audio_array)] = audio_array
            i += len(audio_array)
        audio_data = np.reshape(audio_data, (-1, n_channels))
        return audio_data, sr

# Convert MP4 to WAV
def convert_mp4_to_wav(mp4_file, wav_file):
    audio = AudioSegment.from_file(mp4_file, format="mp4")
    audio.export(wav_file, format="wav")
    print(f"Converted {mp4_file} to {wav_file}")

# Transcribe audio to text
def transcribe_audio_to_text(audio_file):
    recognizer = sr.Recognizer()
    with sr.AudioFile(audio_file) as source:
        audio = recognizer.record(source)
    try:
        text = recognizer.recognize_google(audio)
        print(f"Transcription: {text}")
        return text
    except sr.UnknownValueError:
        print("Google Speech Recognition could not understand audio")
        return ""
    except sr.RequestError:
        print("Could not request results from Google Speech Recognition service")
        return ""

# Function to calculate speech rate (words per minute)
def calculate_speech_rate(transcript, audio_duration):
    words = transcript.split()
    word_count = len(words)
    # Speech rate in words per minute
    speech_rate = (word_count / audio_duration) * 60
    return speech_rate

# Function to analyze pitch variation using audioread
def analyze_pitch_variation(audio_file):
    audio_data, sample_rate = load_audio_with_audioread(audio_file)
    y = audio_data[:, 0] if audio_data.shape[1] > 1 else audio_data.flatten()
    pitch, mag = librosa.piptrack(y=y, sr=sample_rate)
    
    pitch_values = []
    for t in range(pitch.shape[1]):
        index = pitch[:, t].argmax()
        pitch_value = pitch[index, t]
        if pitch_value > 0:  # Valid pitch
            pitch_values.append(pitch_value)
    pitch_variation = max(pitch_values) - min(pitch_values) if pitch_values else 0
    print(f"Pitch variation: {pitch_variation}")
    return pitch_variation

# Analyze filler words and pauses
def analyze_filler_words_and_pauses(transcript):
    # Added more common filler words such as "you know", "basically", "so"
    hesitations = re.findall(r"\bum\b|\buh\b|\blike\b|\byou know\b|\bso\b|\bbasically\b", transcript)
    filler_count = len(hesitations)
    print(f"Filler words count: {filler_count}")
    return filler_count

# Sentiment analysis using TextBlob
def analyze_sentiment(transcript):
    blob = TextBlob(transcript)
    sentiment_polarity = blob.sentiment.polarity
    print(f"Sentiment polarity: {sentiment_polarity}")
    return sentiment_polarity

# Analyze clarity and coherence by checking fluency and sentence structure
def analyze_clarity_and_coherence(transcript):
    words = word_tokenize(transcript)
    stop_words = set(stopwords.words('english'))
    filtered_words = [w for w in words if not w.lower() in stop_words and w.isalpha()]
    
    hesitations = re.findall(r"\bum\b|\buh\b|\blike\b|\byou know\b|\bso\b|\bbasically\b", transcript)
    
    # Adjusted thresholds for 10th-grade student
    if len(hesitations) <= 7 and len(filtered_words) > 100:
        return 3.0  # Excellent fluency and clarity
    elif len(hesitations) <= 10:
        return 2.5  # Moderate fluency, acceptable clarity
    else:
        return 2.0  # Needs improvement

# Analyze structure and organization based on logical structure (without full stops)
def analyze_structure_and_organization(transcript):
    # Using phrases that indicate new thoughts rather than relying on full stops
    sentence_like_phrases = re.findall(r"(\bso\b|\btherefore\b|\band then\b|\bbecause\b)", transcript)
    num_sentences = len(sentence_like_phrases) + 1  # Add one to account for the initial thought
    
    # Adjusted for an expected response of ~1 minute
    if num_sentences > 5:
        return 2.5  # Well-structured and clear transitions
    elif num_sentences > 2:
        return 2.0  # Adequate structure, some clarity issues
    else:
        return 1.5  # Needs better organization

# Analyze relevance and completeness of the response
def analyze_relevance_and_completeness(transcript, key_terms):
    matches = [term for term in key_terms if term.lower() in transcript.lower()]
    num_relevant_points = len(matches)
    
    # Adjusting the thresholds for a reasonable response length
    if num_relevant_points >= 4:
        return 2.5  # Highly relevant and complete
    elif num_relevant_points == 3:
        return 2.0  # Mostly relevant
    else:
        return 1.5  # Lacking key points

# Analyze logical reasoning and critical thinking by checking use of examples and depth of explanation
def analyze_logical_reasoning(transcript):
    blob = TextBlob(transcript)
    sentiment_polarity = blob.sentiment.polarity  # Check if the sentiment is neutral to positive (logical flow)
    
    example_keywords = ["for example", "such as", "in my experience"]
    examples_given = any(phrase in transcript.lower() for phrase in example_keywords)
    
    # Adjusting the logic to fit a typical response of a 10th grader
    if sentiment_polarity > 0.3 and examples_given:
        return 2.7  # Good reasoning with examples
    elif sentiment_polarity > 0.2:
        return 2.2  # Moderate reasoning
    else:
        return 1.8  # Needs more logical flow

# Function to grade the student's response
def grade_student_response(audio_file):
    wav_file = "converted_audio.wav"
    
    # Convert MP4 to WAV
    convert_mp4_to_wav(audio_file, wav_file)
    
    # Transcribe WAV audio to text
    transcript = transcribe_audio_to_text(wav_file)
    if not transcript:
        print("Could not analyze the audio.")
        return 0

    # Analyze audio-based features
    pitch_variation = analyze_pitch_variation(wav_file)
    filler_count = analyze_filler_words_and_pauses(transcript)
    sentiment_polarity = analyze_sentiment(transcript)

    # Define key terms relevant to the question on teamwork
    key_terms = ["distribution", "communication", "collaboration", "tasks", "goals", "success", "teamwork"]

    # Analyze text-based clarity, structure, relevance, and reasoning
    clarity_score = analyze_clarity_and_coherence(transcript)
    structure_score = analyze_structure_and_organization(transcript)
    relevance_score = analyze_relevance_and_completeness(transcript, key_terms)
    reasoning_score = analyze_logical_reasoning(transcript)

    # Adjustments based on filler words, sentiment, and pitch variation
    if filler_count > 12:  # Increased allowance for more filler words
        clarity_score -= 0.5

    if sentiment_polarity > 0.3:
        reasoning_score += 0.3
    elif sentiment_polarity < 0:
        reasoning_score -= 0.3
    
    if pitch_variation > 150:  # Increased variation threshold for engagement
        reasoning_score += 0.5
    else:  # Low variation (monotone, less engaging)
        reasoning_score -= 0.2

    # Final score out of 10
    final_score = clarity_score + structure_score + relevance_score + reasoning_score
    final_score = min(max(final_score, 0), 10)  # Ensure the score is between 0 and 10
    print(f"Final Score: {final_score}/10")
    
    # Clean up
    import os
    os.remove(wav_file)
    print(f"Deleted the temporary WAV file: {wav_file}")
    
    return final_score

# Example usage
audio_file = "C:/Users/Rao/Desktop/Maansi/audio/WhatsApp Audio 2024-09-10 at 11.32.50 AM.mp4"
grade_student_response(audio_file)
