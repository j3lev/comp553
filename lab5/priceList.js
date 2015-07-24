var app = angular.module('fishStore', []);
app.controller('mainCtrl', function($scope) {

    $scope.discount = false;
    $scope.fish = [
        {
            name: 'Guppy',
            price: 1.99,
            quantity: 0
        },
        {
            name: 'Mollie',
            price: 2.99,
            quantity: 0
        },
        {
            name: 'Angel Fish',
            price: 15.00,
            quantity: 0
        },
        {
            name: 'Goldfish',
            price: 0.99,
            quantity: 0
        },
        {
            name: 'Piranha',
            price: 27.99,
            quantity: 0
        },
        {
            name: 'Spiny Eel',
            price: 14.99,
            quantity: 0
        },
        {
            name: 'Clown Loach',
            price: 9.99,
            quantity: 0
        }
    ];

    var fishNames = $scope.fish.map(function (fishy) {
        return fishy.name;
    });

    $scope.cart = [];

    $scope.addFish = function (fishy) {
        var cartFish = angular.copy(fishy);
        if (fishy.quantity) {
            for (var i = 0; i < $scope.cart.length; i++) {
                if (fishy.name === $scope.cart[i].name) {
                    $scope.cart[i].quantity += fishy.quantity;
                    return;
                }
            }
            $scope.cart.push(cartFish);
            fishy.quantity = 0;
        } else {
            alert('Please enter a quantity greater than 0');
        }
    };

    $scope.totalPrice = function () {
        var total = 0;
        var numOfFish = 0;
        angular.forEach($scope.cart, function (fishy) {
            total += fishy.price * fishy.quantity;
            numOfFish += fishy.quantity;
        });
        if (numOfFish > 10) {
            $scope.discount = true;
            total -= total * .1;
        } else {
            $scope.discount = false;
        }
        return total;
    };

    $scope.remove = function (name) {
        for (var i = 0; i < $scope.cart.length; i++) {
            if ($scope.cart[i].name === name) {
                $scope.cart.splice(i, 1);
                break;
            }
        }
    };

});