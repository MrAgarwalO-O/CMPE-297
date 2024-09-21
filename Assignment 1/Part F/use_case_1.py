import requests
from bs4 import BeautifulSoup
import csv

def scrape_website(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    data = []
    for item in soup.select('.data-item'):
        title = item.select_one('.title').text
        description = item.select_one('.description').text
        data.append([title, description])

    with open('scraped_data.csv', 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['Title', 'Description'])
        writer.writerows(data)

if __name__ == '__main__':
    url = 'http://example.com/data'
    scrape_website(url)