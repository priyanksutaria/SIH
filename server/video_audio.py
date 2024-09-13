from moviepy.editor import VideoFileClip
import os

#video to be uploaded from fe on uploads

current=os.getcwd()
UPLOAD_FOLDER = os.path.join(current,'uploads')
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)
audio_path=os.path.join(UPLOAD_FOLDER,'Audio.mp3')
if not os.path.exists(audio_path):
    with open(audio_path, 'w') as file:
        file.write("")
def video_to_audio(video_file):
    # video_file = os.path.join(os.getcwd(), 'uploads/Video.mp4') #hardcoded
    audio_file = os.path.join(os.getcwd(), 'uploads/Audio.mp3')  #hardcoded

    video_clip = VideoFileClip(video_file)
    audio_clip = video_clip.audio
    audio_clip.write_audiofile(audio_file, codec='libmp3lame')  

    audio_clip.close()
    video_clip.close()