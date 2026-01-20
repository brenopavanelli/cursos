from bs4 import BeautifulSoup

html_file = open("data_in_table.html")
soup = BeautifulSoup(html_file, "html.parser")

table = soup.find(id='main_table')
table_rows = table.find_all('tr')

alunos_com_a = []

for line in table_rows:
    colunas = line.find_all('td')
    if len(colunas) > 0:
        nome_do_aluno = colunas[1].text
        if nome_do_aluno[0] == "A":
            alunos_com_a.append(nome_do_aluno)


print(alunos_com_a)