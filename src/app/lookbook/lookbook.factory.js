function LookbookFactory($http){
  var slides = [
    {
      img: '/images/look1/01.jpg',
      articles: {
        '14559': 'http://www.love-sl.ru/catalog/ring72513.html',
        '20230': 'http://www.love-sl.ru/catalog/earring177998.html',
        '3611': 'http://www.love-sl.ru/catalog/ring3611.html',
        '11760': 'http://www.love-sl.ru/catalog/ring30590.html',
        '17078': 'http://www.love-sl.ru/catalog/ring113490.html',
        '22030': 'http://www.love-sl.ru/catalog/silver/bracelets205563.html',
        '31627': 'http://www.love-sl.ru/catalog/pendants-charm239355.html',
        '31624': 'http://www.love-sl.ru/catalog/pendants-charm239352.html',
        '31633': 'http://www.love-sl.ru/catalog/pendants-charm239400.html'
      }
    },
    {
      img: '/images/look1/02.jpg',
      articles: {
        '14559': 'http://www.love-sl.ru/catalog/ring72513.html',
        '20230': 'http://www.love-sl.ru/catalog/earring177998.html',
        '3611': 'http://www.love-sl.ru/catalog/ring3611.html',
        '11760': 'http://www.love-sl.ru/catalog/ring30590.html'
      }
    },
    {
      img: '/images/look1/03.jpg',
      articles: {
        '32964': 'http://www.love-sl.ru/catalog/ring243180.html',
        '33015': 'http://www.love-sl.ru/catalog/earring243253.html',
        '23046': 'http://www.love-sl.ru/catalog/ring211706.html'
      }
    },
    {
      img: '/images/look1/04.jpg',
      articles: {
        '32964': 'http://www.love-sl.ru/catalog/ring243180.html',
        '23046': 'http://www.love-sl.ru/catalog/ring211706.html',
        '24488': 'http://www.love-sl.ru/catalog/ring219533.html',
        '36043': 'http://www.love-sl.ru/catalog/silver/ring249084.html',
        '31006': 'http://www.love-sl.ru/catalog/silver/bracelets236716.html',
        '22308': 'http://www.love-sl.ru/catalog/silver/pendants-charm207292.html',
        '22984': 'http://www.love-sl.ru/catalog/silver/pendants-charm211054.html'
      }
    },
    {
      img: '/images/look1/05.jpg',
      articles: {
        '36043': ';http://www.love-sl.ru/catalog/silver/ring249084.html',
        '24488': 'http://www.love-sl.ru/catalog/ring219533.html',
        '32964': 'http://www.love-sl.ru/catalog/ring243180.html',
        '23046': 'http://www.love-sl.ru/catalog/ring211706.html',
        '31006': 'http://www.love-sl.ru/catalog/silver/bracelets236716.html'
      }
    },
    {
      img: '/images/look1/06.jpg',
      articles: {
        '17078': 'http://www.love-sl.ru/catalog/ring113490.html',
        '22030': 'http://www.love-sl.ru/catalog/silver/bracelets205563.html',
        '14559': 'http://www.love-sl.ru/catalog/ring72513.html',
        '3611': 'http://www.love-sl.ru/catalog/ring3611.html',
        '11760': 'http://www.love-sl.ru/catalog/ring30590.html',
        '31627': 'http://www.love-sl.ru/catalog/pendants-charm239355.html',
        '31624': 'http://www.love-sl.ru/catalog/pendants-charm239352.html',
        '31633': 'http://www.love-sl.ru/catalog/pendants-charm239400.html',
        '31625': 'http://www.love-sl.ru/catalog/pendants-charm239353.html',
        '31629': 'http://www.love-sl.ru/catalog/pendants-charm239396.html',
        '31632': 'http://www.love-sl.ru/catalog/pendants-charm239399.html',
        '36170': 'http://www.love-sl.ru/catalog/silver/pendants-charm249460.html'
      }
    },
    {
      img: '/images/look1/07.jpg',
      articles: {
        '23046': 'http://www.love-sl.ru/catalog/ring211706.html',
        '32964': 'http://www.love-sl.ru/catalog/ring243180.html',
        '24488': 'http://www.love-sl.ru/catalog/ring219533.html',
        '31006': 'http://www.love-sl.ru/catalog/silver/bracelets236716.html',
        '21894': 'http://www.love-sl.ru/catalog/silver/bracelets204249.html',
        '21898': 'http://www.love-sl.ru/catalog/silver/bracelets204253.html',
        '21888': 'http://www.love-sl.ru/catalog/silver/bracelets204245.html',
        '21711': 'http://www.love-sl.ru/catalog/silver/pendants-charm203777.html',
        '17496': 'http://www.love-sl.ru/catalog/silver/pendants-charm116275.html',
        '23011': 'http://www.love-sl.ru/catalog/silver/pendants-charm211205.html',
        '22034': 'http://www.love-sl.ru/catalog/silver/pendants-charm205574.html',
        '22308': 'http://www.love-sl.ru/catalog/silver/pendants-charm207292.html',
        '22814': 'http://www.love-sl.ru/catalog/silver/pendants-charm210085.html',
        '21973': 'http://www.love-sl.ru/catalog/silver/pendants-charm205067.html'
      }
    },
    {
      img: '/images/look1/08.jpg',
      articles: {
        '23046': 'http://www.love-sl.ru/catalog/ring211706.html',
        '32964': 'http://www.love-sl.ru/catalog/ring243180.html',
        '24488': 'http://www.love-sl.ru/catalog/ring219533.html',
        '31006': 'http://www.love-sl.ru/catalog/silver/bracelets236716.html',
        '21894': 'http://www.love-sl.ru/catalog/silver/bracelets204249.html',
        '21898': 'http://www.love-sl.ru/catalog/silver/bracelets204253.html',
        '21888': 'http://www.love-sl.ru/catalog/silver/bracelets204245.html',
        '21711': 'http://www.love-sl.ru/catalog/silver/pendants-charm203777.html',
        '17496': 'http://www.love-sl.ru/catalog/silver/pendants-charm116275.html',
        '23011': 'http://www.love-sl.ru/catalog/silver/pendants-charm211205.html',
        '22034': 'http://www.love-sl.ru/catalog/silver/pendants-charm205574.html',
        '22308': 'http://www.love-sl.ru/catalog/silver/pendants-charm207292.html',
        '22814': 'http://www.love-sl.ru/catalog/silver/pendants-charm210085.html',
        '21973': 'http://www.love-sl.ru/catalog/silver/pendants-charm205067.html'
      }
    }
  ];

  function loadItems(articles) {
    return $http({
      url: 'https://api.love.sl/v1/catalog/products/',
      method: 'GET',
      params: { article: articles }
    }).then((response) => response.data.results.map((item) => {
      item.image = item.images.filter((image) => image.is_primary)[0].file;
      item.material = item.material + ' ' + item.fineness.replace( /^\D+/g, '') + '°';
      return item;
    }));
  }

  return {
    slides: slides,
    loadItems: loadItems
  };
}

export default LookbookFactory;