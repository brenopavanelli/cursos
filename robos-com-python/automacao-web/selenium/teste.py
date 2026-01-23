from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from selenium.common.exceptions import ElementClickInterceptedException, StaleElementReferenceException
from pathlib import Path

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

# # 1) Garanta que o menu/área de favoritos está aberto (após hover)
# icone_favorito = wait.until(
#     EC.visibility_of_element_located((By.CSS_SELECTOR, "a[title='Adicionar aos favoritos']"))
# )
# actions.move_to_element(icone_favorito).pause(0.2).perform()
#
# # 2) Agora espere o item ficar CLICÁVEL (não só visível)
# locator_relatorios = (By.CSS_SELECTOR, "a.favorite-link[data-title='Relatórios Dinâmicos']")
#
# try:
#     botao_relatorio = wait.until(EC.element_to_be_clickable(locator_relatorios))
#
#     # 3) Move o mouse até ele (mantém o menu aberto) e clica
#     actions.move_to_element(botao_relatorio).pause(0.1).click(botao_relatorio).perform()
#
# except (ElementClickInterceptedException, StaleElementReferenceException):
#     # Fallback: scroll + JS click (muito útil com tooltip/overlay)
#     botao_relatorio = wait.until(EC.presence_of_element_located(locator_relatorios))
#     driver.execute_script("arguments[0].scrollIntoView({block:'center'});", botao_relatorio)
#     driver.execute_script("arguments[0].click();", botao_relatorio)
#
# body = driver.find_element(By.TAG_NAME, "body")
# ActionChains(driver).move_to_element(body).perform()



input("Login feito. ENTER para fechar")
driver.quit()
