# TablerPOC - Proof of Concept ASP.NET MVC com Tabler.ui

## Descrição

Este projeto é um POC (Proof of Concept) desenvolvido em ASP.NET MVC 8.0 que implementa um layout baseado no framework Tabler.ui com as seguintes características:

- **Header azul escuro** ocupando 100% da largura horizontal
- **Sidebar vertical cinza** com animações suaves
- **10+ itens de menu** com 3 submenus funcionais
- **Design responsivo** para desktop e mobile
- **Animações CSS** e JavaScript para melhor experiência do usuário

## Características Implementadas

### Layout
- ✅ Header fixo azul escuro (#1e293b) com 100% de largura
- ✅ Logo da empresa posicionado no header
- ✅ Sidebar vertical cinza (#f8f9fa) com 280px de largura
- ✅ Botão toggle para colapsar/expandir sidebar
- ✅ Layout responsivo para dispositivos móveis

### Menu Sidebar
- ✅ 10 itens principais de menu:
  1. Dashboard
  2. Vendas (com submenu)
  3. Relatórios
  4. Financeiro (com submenu)
  5. Recursos Humanos
  6. Estoque (com submenu)
  7. Logística
  8. Marketing
  9. Configurações
  10. Suporte

- ✅ 3 submenus funcionais:
  - **Vendas**: Pedidos, Clientes, Produtos
  - **Financeiro**: Contas a Pagar, Contas a Receber, Fluxo de Caixa
  - **Estoque**: Produtos, Movimentações, Inventário

### Animações
- ✅ Transições suaves no sidebar (0.3s ease-in-out)
- ✅ Animação de hover nos itens do menu
- ✅ Animação de expansão/colapso dos submenus
- ✅ Efeitos de carregamento nos cards do dashboard
- ✅ Animação de barras de progresso
- ✅ Pulso nos indicadores de status

### Dashboard
- ✅ Cards com métricas de negócio
- ✅ Tabela de últimas transações
- ✅ Lista de atividades recentes
- ✅ Área para gráficos (placeholder)
- ✅ Design baseado no Tabler.ui

## Tecnologias Utilizadas

- **ASP.NET Core MVC 8.0**
- **Tabler.ui 1.4.0** (via CDN)
- **Bootstrap 5** (incluído no Tabler)
- **JavaScript ES6+**
- **CSS3 com animações**
- **Tabler Icons**

## Estrutura do Projeto

```
TablerPOC/
├── Controllers/
│   └── HomeController.cs
├── Models/
├── Views/
│   ├── Home/
│   │   └── Index.cshtml (Dashboard)
│   └── Shared/
│       └── _Layout.cshtml (Layout principal)
├── wwwroot/
│   ├── css/
│   │   └── site.css
│   └── js/
│       └── site.js (Funcionalidades do sidebar)
├── Program.cs
└── README.md
```

## Como Executar

1. **Pré-requisitos:**
   - .NET 8.0 SDK instalado
   - Navegador web moderno

2. **Executar o projeto:**
   ```bash
   cd TablerPOC
   dotnet run --urls="http://localhost:5000"
   ```

3. **Acessar a aplicação:**
   - Abra o navegador em: http://localhost:5000

## Funcionalidades Testadas

### ✅ Sidebar Toggle
- Botão no header colapsa/expande o sidebar
- Animação suave de transição
- Conteúdo principal se ajusta automaticamente
- Estado persistido no localStorage

### ✅ Submenus
- Clique nos itens com submenu expande/colapsa
- Animação de rotação do ícone chevron
- Transição suave de altura
- Múltiplos submenus podem estar abertos

### ✅ Responsividade
- Em telas menores que 768px, sidebar fica oculto
- Botão toggle funciona em mobile
- Clique fora do sidebar o fecha em mobile
- Layout se adapta automaticamente

### ✅ Animações
- Hover effects nos itens do menu
- Loading animation nos cards
- Progress bars animadas
- Status dots com pulso
- Transições suaves em todos os elementos

## Customizações Implementadas

### CSS Customizado
- Cores personalizadas para header e sidebar
- Animações CSS3 para transições
- Media queries para responsividade
- Efeitos de hover e focus

### JavaScript Avançado
- Gerenciamento de estado do sidebar
- Controle de submenus com animações
- Persistência de preferências
- Funcionalidades responsivas
- Animações de carregamento

## Compatibilidade

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móveis (iOS/Android)

## Próximos Passos (Sugestões)

1. **Integração com banco de dados** para dados reais
2. **Autenticação e autorização** de usuários
3. **Páginas funcionais** para cada item do menu
4. **Gráficos interativos** com Chart.js ou similar
5. **Temas** claro/escuro
6. **Notificações** em tempo real
7. **Busca** no sidebar
8. **Breadcrumbs** para navegação

## Observações Técnicas

- O projeto utiliza CDN para Tabler.ui, garantindo sempre a versão mais atualizada
- Todas as animações são otimizadas para performance
- O código JavaScript é modular e facilmente extensível
- O CSS segue as melhores práticas de organização
- Layout totalmente responsivo seguindo mobile-first

---

**Desenvolvido como POC para demonstrar integração ASP.NET MVC + Tabler.ui**

