🍔 DevBurger Interface

Interface completa do sistema DevBurger, desenvolvida em React e integrada à API Node.js.
Este projeto oferece uma experiência moderna, responsiva e intuitiva para clientes e administradores — permitindo realizar pedidos, gerenciar produtos e efetuar pagamentos com Stripe.

🚀 Tecnologias Utilizadas

⚛️ React.js – biblioteca principal da interface

🧭 React Router DOM – navegação entre rotas

💅 Styled-Components – estilização com componentes reutilizáveis

📦 Axios – comunicação com a API

🔐 JWT Auth – autenticação segura via token

💳 Stripe.js – integração para pagamentos online

📂 Multer / Uploads – gerenciamento de imagens de produtos

🛍️ Context API (CartContext) – controle global do carrinho

🧠 Yup / Form Validation – validação de dados nos formulários

⚙️ Vite – ambiente de desenvolvimento rápido e otimizado


🎨 Funcionalidades Principais
🧍‍♂️ Usuário

Cadastro e login com autenticação JWT

Visualização de produtos e categorias

Adição e remoção de itens do carrinho

Cálculo automático de subtotal e taxa de entrega

Finalização do pedido com redirecionamento para o checkout Stripe

👨‍🍳 Administrador

Acesso ao painel administrativo com autenticação

Listagem de produtos com busca e paginação

Cadastro e edição de produtos (nome, preço, imagem, categoria e oferta)

Controle de ofertas (marcar/desmarcar produtos em promoção)

Gerenciamento de categorias

Visualização de pedidos dos clientes

💳 Pagamentos

Checkout com Stripe API

Validação do pagamento e redirecionamento automático

Suporte a pagamento com cartão (Pix opcional futuro)

⚡ Instalação e Execução

git clone https://github.com/seuusuario/devburger-interface.git
cd devburger-interface


2️⃣ Instale as dependências
yarn install

3️⃣ Configure o ambiente
Crie o arquivo .env com:
VITE_API_BASE_URL=http://localhost:3001
VITE_STRIPE_PUBLIC_KEY=sua_chave_publica_stripe

4️⃣ Execute o projeto
yarn dev

🔑 Autenticação

Para acessar áreas restritas (admin, pedidos, etc.), é necessário estar autenticado.
O token JWT é salvo no localStorage e usado automaticamente nas requisições.

🧠 Autor

Desenvolvido por Jonathan Alves
💼 LinkedIn: https://www.linkedin.com/in/jonathan-constantino/

📧 jho-alvhotmail@hotmail.com
