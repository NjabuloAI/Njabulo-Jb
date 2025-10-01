import json

class Media:
    def __init__(self, media_json):
        self.media_json = media_json

    def get_image(self, image_name):
        return self.media_json["images"].get(image_name)

    def get_video(self, video_name):
        return self.media_json["videos"].get(video_name)

    def get_audio(self, audio_name):
        return self.media_json["audio"].get(audio_name)

    def get_social_media(self, platform):
        return self.media_json["social_media"].get(platform)

# Example usage
media_json = {
  "images": {
    "profile_picture": "https://example.com/profile.jpg",
    "background_image": "https://example.com/background.jpg"
  },
  "videos": {
    "intro_video": "https://example.com/intro.mp4",
    "tutorial_video": "https://example.com/tutorial.mp4"
  },
  "audio": {
    "background_music": "https://example.com/music.mp3",
    "voiceover": "https://example.com/voiceover.mp3"
  },
  "social_media": {
    "facebook": "https://facebook.com/njabulo.jb",
    "twitter": "https://twitter.com/njabulo_jb",
    "instagram": "https://instagram.com/njabulo.jb"
  }
}

media = Media(media_json)
print(media.get_image("profile_picture"))
print(media.get_video("intro_video"))
print(media.get_audio("background_music"))
print(media.get_social_media("facebook"))