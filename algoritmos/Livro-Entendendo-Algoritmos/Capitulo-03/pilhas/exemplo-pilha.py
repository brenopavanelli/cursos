def sauda(nome): 
    print("Olá, " + nome + "!")
    sauda2(nome) # Todos os valores  para aquela função base ainda estão armazenados na memória
    print("preparando para dizer tchau...")
    tchau()

def sauda2(nome):
    print("Como vai " + nome + "?")
def tchau():
    print("ok, tchau!")


sauda('Breno')

# quando você chama uma função a partir de outra, a chamada de função fica pausada em um estado parcialmente completo
