class NjabuloJBAI:
    def __init__(self, name):
        self.name = name

    def greet(self):
        print(f"Hello, I'm {self.name}!")

    def process_media(self, media):
        # Simulate media processing
        print(f"Processing media for {self.name}...")

# Example usage
njabulo_jb_ai = NjabuloJBAI("Njabulo JB AI")
njabulo_jb_ai.greet()
njabulo_jb_ai.process_media(media)k