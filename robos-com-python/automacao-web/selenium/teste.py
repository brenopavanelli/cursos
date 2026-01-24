from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from pathlib import Path
import time

BASE_DIR = Path(__file__).resolve().parent
DRIVER_PATH = BASE_DIR / "drivers" / "chromedriver.exe"

service = Service(str(DRIVER_PATH))
driver = webdriver.Chrome(service=service)

actions = ActionChains(driver)
wait = WebDriverWait(driver, 20)

driver.maximize_window()

# Abre o site
driver.get("https://pmjaboticabal.smarapd.com.br/rh/#/folhapagamento/informacaofinanceiraexportacaopersonalizada")

# Localiza e preenche o formulário
usuario = wait.until(EC.element_to_be_clickable((By.NAME, "userId")))
senha = wait.until(EC.element_to_be_clickable((By.NAME, "password")))

usuario.send_keys("bpsantos")
senha.send_keys("Cavalo13!")

botao_entrar = wait.until(
    EC.element_to_be_clickable(
        (By.XPATH, "//button[@type='submit' and normalize-space()='Entrar']")
    )
)

botao_entrar.click()

# espera o login acontecer
wait.until(EC.url_changes("https://pmjaboticabal.smarapd.com.br/Index.html#/login"))

# Clica para prosseguir
botao_confirmar = wait.until(
    EC.element_to_be_clickable(
        (By.XPATH, "//button[@type='submit' and normalize-space()='Confirmar']")
    )
)
botao_confirmar.click()

wait.until(EC.url_changes("https://pmjaboticabal.smarapd.com.br/Index.html#/login"))

# preenche o formulário

valores = ["RHV00100 - View Funcionários Rel Dinâmico - RD", "Cálculo", "Satisfatórios", "Ambos"]

for i, valor in enumerate(valores):

    # espera os inputs existirem novamente
    wait.until(EC.presence_of_all_elements_located(
        (By.NAME, "InputText_input")
    ))

    inputs = driver.find_elements(By.NAME, "InputText_input")

    campo = inputs[i]
    campo.click()
    campo.clear()
    campo.send_keys(valor)
    time.sleep(0.5)  # 300 ms (ajuste entre 0.2 e 0.5)
    campo.send_keys(Keys.ENTER)

    # espera a página "processar" após o envio
    wait.until(EC.invisibility_of_element_located(
        (By.CSS_SELECTOR, ".loading, .spinner")
    ))

input("Teste feito. ENTER para fechar")
driver.quit()
