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
driver.find_element_by_id('like-button').click()
elm = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.ID, "like_button_container"))
)
print(elm.text)
assert('You liked this.' in elm.text)
 
finally:
driver.close()