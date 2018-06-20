angular.module('shopCart', [])
  .factory('Cart', function() {
    var items = [];
    var mixedSalad = 1;
    return {
      getItems: function() {
        return items;
      },
      addArticle: function(article) {
        if (items.includes(article)) {
          mixedSalad = mixedSalad + 1;
          document.getElementById("p1").innerHTML = mixedSalad;
        } else {
          items.push(article);
          enableBtn();
          var accounts = [];
          document.getElementsByClassName("p1")[0].setAttribute("class", "democlass"); 
          for (var i = 0; i < items.length; ++i) {
            accounts[i] = items[i];
            console.log(items);
          }
          // console.log(accounts);
        }
        
      },
      sum: function() {
        return items.reduce(function(total, article) {
          return total + article.price;
        }, 0);
      }
    };
  })
  .controller('ArticlesCtrl', function($scope, $http, Cart){
    $scope.cart = Cart;
    $http.get('articles.json').then(function(articlesResponse) {
      $scope.articles = articlesResponse.data;
    });
  })
  .controller('CartCtrl', function($scope, Cart){
    $scope.cart = Cart;
  });


// Aktivieren des "Checkout"-Btn
function enableBtn() {
  $('.disabled-btn').prop("disabled", false);
}