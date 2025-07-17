import requests

url = "proxy2.eq.edu.au"
response = requests.get(url, proxies=proxies)
print(response.text)
