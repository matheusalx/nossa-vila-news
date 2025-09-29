export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  author: string;
  publishDate: string;
  category: string;
  isUrgent?: boolean;
  isFeatured?: boolean;
}

export const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'Nova Biblioteca Municipal Será Inaugurada no Próximo Mês',
    summary: 'O projeto da nova biblioteca central promete ser um marco cultural para nossa cidade, com mais de 50 mil livros e espaços modernos para estudo.',
    content: `A Prefeitura Municipal anuncia com orgulho a inauguração da nova Biblioteca Central, prevista para acontecer no próximo mês. O projeto, que levou dois anos para ser concluído, representa um investimento de R$ 2,5 milhões em infraestrutura cultural para nossa comunidade.

A nova biblioteca contará com um acervo inicial de 50 mil livros, salas de estudo individuais e coletivas, auditório com capacidade para 200 pessoas, laboratório de informática com 30 computadores, e uma seção infantil especialmente projetada para incentivar o hábito da leitura desde a infância.

"Esta biblioteca não é apenas um depósito de livros, mas um centro vivo de aprendizado e cultura", declarou o prefeito durante coletiva de imprensa. "Queremos que seja um espaço onde nossa comunidade possa se encontrar, aprender e crescer juntos."`,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
    author: 'Maria Silva',
    publishDate: 'Há 2 horas',
    category: 'Cultura',
    isFeatured: true
  },
  {
    id: '2',
    title: 'Time Municipal Conquista Campeonato Regional',
    summary: 'Após uma final emocionante, nossa equipe local trouxe para casa o troféu do campeonato regional de futebol.',
    content: `Em uma partida eletrizante que manteve os torcedores em suspense até o último minuto, o time municipal conquistou o título do Campeonato Regional de Futebol. A vitória veio nos pênaltis, após um empate em 2x2 no tempo normal.

O goleiro João Santos foi o herói da noite ao defender três cobranças de pênalti, garantindo o título tão sonhado pela torcida local. "É um sonho realizado", declarou o capitão do time. "Toda a cidade merece essa conquista."

A celebração tomou conta das ruas, com milhares de pessoas comemorando até altas horas. A Prefeitura já anunciou que organizará um desfile para homenagear os campeões.`,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
    author: 'Carlos Santos',
    publishDate: 'Há 4 horas',
    category: 'Esporte',
    isFeatured: true
  },
  {
    id: '3',
    title: 'URGENTE: Novo Hospital Regional Recebe Primeiros Pacientes',
    summary: 'O moderno hospital regional iniciou suas atividades hoje, oferecendo atendimento 24h e especialidades médicas avançadas.',
    content: `O Hospital Regional Municipal iniciou oficialmente suas atividades na manhã de hoje, marcando um novo capítulo na saúde pública local. A unidade conta com 150 leitos, centro cirúrgico com 8 salas, UTI com 20 leitos e pronto-socorro com capacidade para 300 atendimentos diários.

A nova instalação representa um investimento de R$ 45 milhões e promete revolucionar o atendimento médico na região. "Agora nossa população não precisará mais se deslocar para centros maiores para receber tratamento especializado", afirmou a secretária de Saúde.

O hospital oferece especialidades como cardiologia, neurologia, ortopedia e pediatria, além de contar com equipamentos de última geração para diagnóstico por imagem.`,
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800',
    author: 'Dr. Ana Costa',
    publishDate: 'Há 1 hora',
    category: 'Saúde',
    isUrgent: true,
    isFeatured: true
  },
  {
    id: '4',
    title: 'Festival de Inverno Movimenta Centro Histórico',
    summary: 'Três dias de música, gastronomia e cultura atraem milhares de visitantes para o coração da cidade.',
    content: `O Festival de Inverno transformou o centro histórico em um palco a céu aberto, reunindo artistas locais e regionais em uma celebração da cultura municipal. Durante três dias, mais de 50 apresentações aconteceram em cinco palcos diferentes.

A gastronomia local foi outro destaque, com barracas oferecendo pratos tradicionais e criações especiais dos chefs da cidade. O movimento econômico gerado pelo festival é estimado em R$ 800 mil, beneficiando hotéis, restaurantes e comércio local.

"O festival consolida nossa cidade como destino cultural da região", destacou o secretário de Turismo. A próxima edição já está sendo planejada para o ano que vem.`,
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800',
    author: 'Pedro Oliveira',
    publishDate: 'Há 6 horas',
    category: 'Cultura'
  },
  {
    id: '5',
    title: 'Programa de Reciclagem Reduz Lixo em 40%',
    summary: 'Iniciativa municipal de coleta seletiva mostra resultados impressionantes em apenas seis meses.',
    content: `O programa municipal de reciclagem superou todas as expectativas ao reduzir em 40% a quantidade de lixo enviado para aterros sanitários. A iniciativa, lançada há seis meses, já coletou mais de 200 toneladas de materiais recicláveis.

"O sucesso do programa se deve principalmente à conscientização da população", explicou a coordenadora do projeto ambiental. Mais de 15 mil famílias aderiram à coleta seletiva, separando corretamente os resíduos em suas residências.

Os materiais coletados geram renda para 40 famílias de catadores organizados em cooperativa, criando um ciclo virtuoso de sustentabilidade e inclusão social.`,
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800',
    author: 'Marina Verde',
    publishDate: 'Há 8 horas',
    category: 'Meio Ambiente'
  },
  {
    id: '6',
    title: 'Escola Digital: Tecnologia na Sala de Aula',
    summary: 'Projeto piloto introduz tablets e lousas digitais em cinco escolas municipais.',
    content: `A educação municipal dá um salto tecnológico com o projeto "Escola Digital", que equipou cinco unidades escolares com tablets, lousas digitais e internet de alta velocidade. Mais de 1.200 alunos serão beneficiados pela iniciativa.

O projeto inclui capacitação de 80 professores para o uso das novas ferramentas pedagógicas. "A tecnologia não substitui o professor, mas potencializa seu trabalho", afirmou a secretária de Educação durante o lançamento.

Os primeiros resultados mostram maior engajamento dos estudantes e melhora no desempenho em disciplinas como matemática e ciências. O sucesso do piloto determinará a expansão para toda a rede municipal.`,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
    author: 'Prof. Roberto Lima',
    publishDate: 'Há 12 horas',
    category: 'Educação'
  }
];

export const getFeaturedNews = () => mockNews.filter(news => news.isFeatured);
export const getLatestNews = () => mockNews.filter(news => !news.isFeatured);
export const getNewsByCategory = (category: string) => 
  category === 'Todas' ? mockNews : mockNews.filter(news => news.category === category);
export const getNewsById = (id: string) => mockNews.find(news => news.id === id);