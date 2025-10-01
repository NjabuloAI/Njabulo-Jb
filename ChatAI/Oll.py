import requests

class Ollama:
    def __init__(self, api_url):
        self.api_url = api_url

    def ask(self, question):
        # Simulate API request
        response = requests.post(self.api_url, json={"question": question})
        return response.json()["answer"]

# Example usage
ollama = Ollama("https://api.ollama.ai/ask")
print(ollama.ask("What is the meaning of life?"))