/*
  Please add all Javascript code to this file.
  GA JS-SF-7
  Livia Lucas de Medeiros
*/

"use strict";

var feeds = [ 
    {
        title: "Acompanhe Alemanha e Chile",
        subtitle: "Alemanha empata com o Chile na Copa das Confederações",
        thumbnail: 'image.jpg',
        impressions: '430',
        description: "A Procuradoria-Geral da República fará três denúncias contra o presidente Michel Temer com base nas delações da JBS. A primeira será por corrupção passiva. A segunda será por obstrução da Justiça e a terceira será por organização criminosa. Serão protocoladas em momentos distintos. A denúncia por corrupção passiva, por estar em fase final de elaboração, será apresentada primeiro. As outras duas ainda requerem diligências.",
        articleLink: 'www.google.com'
    },

    {
        title: "What is Lorem Ipsum?",
        subtitle: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        thumbnail: 'image2.jpg',
        impressions: '1430',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas convallis lacus ut porta. Etiam a lectus ultricies, consequat ex et, vestibulum dui. Sed pulvinar dignissim orci, ac mollis lacus iaculis ut. Morbi viverra ex justo, ut tincidunt erat faucibus eu. Vestibulum volutpat ac arcu non dapibus. Proin semper, elit vitae fermentum sagittis, risus nunc molestie ante, a egestas metus magna lobortis dui. Curabitur sem justo, facilisis in cursus quis, luctus ac nibh. Mauris tincidunt massa erat, eget auctor lacus pharetra non. Donec mi diam, rhoncus convallis tincidunt sed, tristique et nunc. Nam eu elit orci. Cras aliquam, neque a fringilla congue, urna risus iaculis turpis, ut molestie massa massa et lectus. Cras id pulvinar mi. Proin dictum convallis felis. Quisque molestie tellus eu pulvinar scelerisque.",
        articleLink: 'www.google.com'
    },

    {
        title: "Lorem Ipsum",
        subtitle: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        thumbnail: 'image2.jpg',
        impressions: '24',
        description: "Mauris ut congue mi, ut facilisis nisi. Phasellus interdum suscipit nulla ut euismod. Nam vitae nulla varius, varius dolor quis, faucibus enim. Vestibulum maximus, nibh sit amet rhoncus semper, mi dui volutpat libero, sit amet tristique nunc augue a mauris. Suspendisse consectetur, urna a tincidunt porta, neque elit sollicitudin magna, nec tincidunt leo magna blandit ex. Praesent sed lobortis mi. Duis laoreet purus ac turpis pellentesque dictum. Sed dapibus varius congue. Ut vel ullamcorper nulla. Proin in elementum risus. Vivamus a leo ut diam efficitur faucibus. Nam tincidunt mauris id sem fringilla imperdiet. Vestibulum blandit nibh in diam luctus, a scelerisque sapien fringilla. Curabitur ut nibh eu risus vehicula euismod. Quisque finibus convallis erat at placerat. Mauris gravida aliquam ipsum nec vehicula.",
        articleLink: 'lelele.lla.com'
    }
];

var $article = $('<article>', {class: 'article'}),
    $imageSection = $('<section>', {class: 'featuredImage'}),
    $image = $('<img>', {src: feeds[0].thumbnail, alt: ''}),
    $articleSection = $('<section>', {class: 'articleContent'}),
    $link = $('<a>', {href: '#'}).append('<h3>'),
    $h6 = $('<h6>'),
    $impressionsSection = $('<section>', {class: 'impressions'}),
    $clearfixDiv = $('<div>', {class: 'clearfix'}),
    $articleTemplate;
  
    $articleTemplate = 
      $article.append($imageSection);
      $imageSection.append($image);
      $article.append($articleSection);
      $articleSection.append($link)
        .append($h6);
      $article.append($impressionsSection)
        .append($clearfixDiv);

function generateNewArticle() {
  $('#main').append($articleTemplate);
}

$(document).ready(function() {
    var i,
        $article;
     
    for(i = 0; i < feeds.length; i += 1) {
      generateNewArticle();
    } 

    //handler to when user clicks on search
    $('#search').on('click', function() {
        $('#search').toggleClass("active");
    });

    //handler to when user clicks on title and opens article details
    $('.articleContent a').on('click', function(e) {
        $('#popUp').removeClass('loader hidden');
        $('#popUp').toggleClass('.popUpAction');
    });

    //handler to hide popUp when the x is pressed
    $('.closePopUp').on('click', function() {
        $('#popUp').toggleClass('closePopUp');
        $('#popUp').toggleClass('loader hidden');
    });

    //handler for when esc is pressed.
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            $('#popUp').toggleClass('closePopUp');
            $('#popUp').toggleClass('loader hidden');
    }
  });
});
