import requests

def get_api_data(url):
    response = requests.get(url)
    return response.json()

if __name__ == '__main__':
    url = 'https://api.example.com/data'
    data = get_api_data(url)
    print(data)