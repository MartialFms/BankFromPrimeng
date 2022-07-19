ici les themes :
http://primefaces.org/primeng/setup
mettre dans le angular.json :
.\node_modules\primeng\resources\themes\lara-dark-purple\theme.css


https://animate.style/


https://stackblitz.com/edit/primeng-dialog-demo?file=README.md
tous les code source + demo


calendar dans style dans angular json

Java :
---------------------- Entité----------------------------------

*Account*
accountId / creationDate / balance / customer

*Current*
accountId / creationDate8 / balance / customer / overdraft

*client*
customerId / name / email

*savings*
- accountId / creationDate / balance / rate / customer

*transfert*
- transactionId / transactionDate / amount / accountId

*retrait*
- transactionId / transactionDate / amount / accountId

---------------------- Fonctions----------------------------------
	public void addAccount(Account account);						//ajoute un compte à notre banque
	public Account consultAccount(long accountId);					//renvoi le compte correspondant à l'id 
	public void pay(long accountId, double amount);					//faire un versement sur un compte 
	public void withdraw(long accountId, double amount);			//faire un retrait sur un compte
	public void transfert(long accIdSrc, long accIdDest, double amount) throws Exception; //faire un virement d'un compte source vers destination
	public ArrayList<Transaction> listTransactions(long accountId); //renvoi la liste des opérations sur un compte donné
