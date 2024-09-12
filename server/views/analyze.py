import audioread
import numpy as np
import speech_recognition as sr
from textblob import TextBlob
import librosa
import nltk
import re
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords, wordnet
from nltk.stem import WordNetLemmatizer
from pydub import AudioSegment

nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')

# Initialize the lemmatizer
lemmatizer = WordNetLemmatizer()

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

# Calculate speech rate (words per minute)
def calculate_speech_rate(transcript, audio_duration):
    words = transcript.split()
    word_count = len(words)
    speech_rate = (word_count / audio_duration) * 60
    return speech_rate

# Expanded filler words and pauses for verbal reasoning (more common phrases)
def analyze_filler_words_and_pauses(transcript):
    hesitations = re.findall(r"\bum\b|\buh\b|\blike\b|\byou know\b|\bso\b|\bbasically\b|\bI mean\b|\bwell\b|\bhmm\b|\bkind of\b|\bI guess\b", transcript)
    filler_count = len(hesitations)
    print(f"Filler words count: {filler_count}")
    return filler_count

# Analyze pitch variation for abstract reasoning (dynamic speech)
def analyze_pitch_variation(audio_file):
    audio_data, sample_rate = load_audio_with_audioread(audio_file)
    y = audio_data[:, 0] if audio_data.shape[1] > 1 else audio_data.flatten()
    pitch, mag = librosa.piptrack(y=y, sr=sample_rate)
    
    pitch_values = []
    for t in range(pitch.shape[1]):
        index = pitch[:, t].argmax()
        pitch_value = pitch[index, t]
        if pitch_value > 0:
            pitch_values.append(pitch_value)
    pitch_variation = max(pitch_values) - min(pitch_values) if pitch_values else 0
    print(f"Pitch variation: {pitch_variation}")
    return pitch_variation

# Sentiment analysis using TextBlob (for abstract reasoning)
def analyze_sentiment(transcript):
    blob = TextBlob(transcript)
    sentiment_polarity = blob.sentiment.polarity
    print(f"Sentiment polarity: {sentiment_polarity}")
    return sentiment_polarity

# Expanded conjunctions for analyzing sentence structure complexity for verbal reasoning
def analyze_sentence_complexity(transcript):
    words = word_tokenize(transcript)
    stop_words = set(stopwords.words('english'))
    filtered_words = [w for w in words if not w.lower() in stop_words and w.isalpha()]
    
    # Expanded set of conjunctions for assessing sentence complexity
    conjunctions = re.findall(r"\bbecause\b|\btherefore\b|\band\b|\bif\b|\bbut\b|\bso\b|\bwhen\b|\bwhile\b|\bhowever\b", transcript)
    conjunction_count = len(conjunctions)
    
    print(f"Filtered words count: {len(filtered_words)}")
    print(f"Conjunction count: {conjunction_count}")
    
    return len(filtered_words), conjunction_count

# Updated abstract reasoning concept list with stricter, unique terms
def analyze_logical_reasoning(transcript):
    # Generalized and lemmatized abstract reasoning concepts
    abstract_keywords = {
        "collaborate", "synergy", "problem", "strategy", "role", "responsibility", 
        "think", "analyze", "decide", "team", "group", "plan", "solution", 
        "goal", "improve", "cooperate", "communicate", "leadership", "cohesion"
    }
    
    words = word_tokenize(transcript)
    lemmatized_words = [lemmatizer.lemmatize(word.lower()) for word in words if word.isalpha()]

    # Matching lemmatized words to generalized abstract keywords
    unique_matches = set(word for word in lemmatized_words if word in abstract_keywords)
    
    print(f"Lemmatized words matched to abstract reasoning concepts: {unique_matches}")
    return len(unique_matches)

# Function to grade verbal reasoning (stricter version)
# Function to grade verbal reasoning (stricter version)
def grade_verbal_reasoning(audio_file, transcript, audio_duration):
    # Analyze filler words, pauses, speech rate, and sentence complexity
    filler_count = analyze_filler_words_and_pauses(transcript)
    speech_rate = calculate_speech_rate(transcript, audio_duration)
    word_count, conjunction_count = analyze_sentence_complexity(transcript)
    
    # Score verbal reasoning out of 10
    verbal_score = 10
    
    # Penalize more for excessive filler words
    if filler_count > 10:  
        verbal_score -= 4  # Deduct 4 points for more than 10 filler words
    
    # Deduct points if the filtered word count is too low (assuming filtered_words < 50 for 1-minute response)
    if word_count < 50:
        verbal_score -= 2  # Deduct 2 points for insufficient filtered word count
    
    # Penalize for lack of complex sentence structures (if less than 3 conjunctions)
    if conjunction_count < 3:
        verbal_score -= 1.5  # Deduct 1.5 points for insufficient conjunctions
    
    # Penalize for speech rate being too slow or too fast
    if speech_rate < 90 or speech_rate > 180:  
        verbal_score -= 1.5  # Deduct 1.5 points for inappropriate speech rate
    
    # Ensure score is not below 0
    return max(0, verbal_score)

# Function to grade abstract reasoning (stricter version)
# Function to grade abstract reasoning (stricter version)
def grade_abstract_reasoning(audio_file, transcript):
    # Analyze pitch variation, sentiment, and abstract concepts
    pitch_variation = analyze_pitch_variation(audio_file)
    sentiment_polarity = analyze_sentiment(transcript)
    abstract_concepts = analyze_logical_reasoning(transcript)

    # Stricter scoring for abstract reasoning out of 10
    abstract_score = 10
    
    # Stricter deduction for lack of pitch variation
    if pitch_variation < 80:
        abstract_score -= 2
    
    # Deduct for slightly negative or neutral sentiment
    if sentiment_polarity < 0.3:
        abstract_score -= 1  # Deduct 1 point for sentiment below 0.3
    
    # Deduct heavily for insufficient abstract concepts (expect at least 4 unique concepts)
    if abstract_concepts < 4:
        abstract_score -= 4  # Deduct 4 points for missing abstract concepts

    return max(0, abstract_score)  # Ensure score is not below 0


# Main function to process the audio and get both scores
def grade_student_response(audio_file):
    wav_file = "converted_audio.wav"
    convert_mp4_to_wav(audio_file, wav_file)
    
    transcript = transcribe_audio_to_text(wav_file)
    if not transcript:
        print("Could not analyze the audio.")
        return 0, 0
    
    audio_duration = AudioSegment.from_wav(wav_file).duration_seconds
    
    verbal_score = grade_verbal_reasoning(wav_file, transcript, audio_duration)
    abstract_score = grade_abstract_reasoning(wav_file, transcript)
    
    print(f"Verbal Reasoning Score: {verbal_score}/10")
    print(f"Abstract Reasoning Score: {abstract_score}/10")
    
    # Clean up
    import os
    os.remove(wav_file)
    return verbal_score, abstract_score

# Example usage
audio_file = "C:/Users/Rao/Desktop/Maansi/audio/WhatsApp Audio 2024-09-11 at 12.42.13 PM.mp4"
verbal_score, abstract_score = grade_student_response(audio_file)
