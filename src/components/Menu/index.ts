export interface IMenu {
   name: string
   id  : string
   url : string
} 
const menu: IMenu[] = [ 
    { name: 'Início'    , id: 'inicio'    , url: '#inicio'}, 
    { name: 'Quem Somos', id: 'quem-somos', url: '#quem-somos'}, 
    { name: 'Serviços'  , id: 'servicos'  , url: '#servicos'}, 
    { name: 'Avaliações', id: 'avaliacoes', url: '#avaliacoes'},
    { name: 'Contato'   , id: 'contato'   , url: '#contato'}  
]

export default menu
