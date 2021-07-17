from selenium import webdriver
    from selenium.webdriver.common.by import By
    from selenium.webdriver.support.ui import WebDriverWait
    from selenium.webdriver.support import expected_conditions as EC

options = webdriver.ChromeOptions()
options.add_argument('--headless')
options.add_argument('--no-sandbox')
driver = webdriver.Chrome(options = options)

try:
driver.get('{{localhost}}/index.html')
driver.find_element_by_id('initial-button').click()
elm = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.ID, "jsx-container"))
)
print(elm.text)
assert('The product name is Rice Krispies, product description is a cereal made of popped rice, and product price is $3.00.' in elm.text)
 
finally:
driver.close()