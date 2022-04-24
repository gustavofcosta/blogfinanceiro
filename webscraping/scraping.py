import requests
from bs4 import BeautifulSoup

url = 'https://pt.wikipedia.org/wiki/Biticoin'

site = requests.get(url)
soup = BeautifulSoup(site.content, 'html.paser')

content = soup.find('div', class_='plainlinks')


print(content)
