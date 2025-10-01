import random

class GPT:
    def __init__(self, model_name):
        self.model_name = model_name

    def generate_text(self, prompt):
        # Simulate text generation
        responses = [
            f"{prompt} is a great topic!",
            f"I'd love to discuss {prompt} further.",
            f"{prompt} is an interesting subject."
        ]
        return random.choice(responses)

# Example usage
gpt = GPT("GPT-3")
print(gpt.generate_text("Artificial Intelligence"))