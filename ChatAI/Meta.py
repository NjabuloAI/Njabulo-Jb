import os

class Meta:
    def __init__(self, name):
        self.name = name

    def greet(self):
        print(f"Hello, I'm {self.name}!")

# Example usage
meta = Meta("Meta AI")
meta.greet()