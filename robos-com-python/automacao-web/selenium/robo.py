from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.keys import Keys

print("Iniciando processamento")

service = Service()  # Selenium acha o chromedriver sozinho
driver = webdriver.Chrome(service=service)

driver.get("https://pmjaboticabal.smarapd.com.br/Index.html#/login?originUrl=https:%2F%2Fpmjaboticabal.smarapd.com.br%2Frh%2F&returnUrl=%2Fescolherunidadegestora%3FreturnUrl%3D%252F&reason=NotLoggedIn")

