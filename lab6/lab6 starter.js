var app = angular.module('dinerApp', []);
app.controller('mainCtrl', function($scope) {

    $scope.selectedMeals = ['bre', 'lun', 'din'];
    $scope.isBreakfast = true;
    $scope.isLunch = true;
    $scope.isDinner = true;

    $scope.changeMeal = function (meal) {
        if ($scope.selectedMeals.indexOf(meal) === -1) {
            $scope.selectedMeals.push(meal);
        } else {
            $scope.selectedMeals.splice($scope.selectedMeals.indexOf(meal), 1);
        }
    };

    $scope.mainDishes = [
        {
            name: 'Chicken Piccata',
            price: 12.99,
            quantity: 0,
            type: 'din'
        },
        {
            name: 'Pasta Primavera',
            price: 10.99,
            quantity: 0,
            type: 'din'
        },
        {
            name: 'Broccoli Alfredo',
            price: 11.99,
            quantity: 0,
            type: 'din'
        },
        {
            name: 'Tuna Melt',
            price: 5.99,
            quantity: 0,
            type: 'lun'
        },
        {
            name: 'Turkey Club',
            price: 6.99,
            quantity: 0,
            type: 'lun'
        },
        {
            name: 'Hamburger',
            price: 7.99,
            quantity: 0,
            type: 'lun'
        },
        {
            name: 'Cheeseburger',
            price: 9.99,
            quantity: 0,
            type: 'lun'
        },
        {
            name: 'Breakfast Burrito',
            price: 9.99,
            quantity: 0,
            type: 'bre'
        },
        {
            name: 'Western Omlette',
            price: 6.99,
            quantity: 0,
            type: 'bre'
        },
        {
            name: 'Eastern Omlette',
            price: 7.56,
            quantity: 0,
            type: 'bre'
        }
    ];

    $scope.sideDishes = [
        {
            name: 'Salad',
            price: 2.99,
            quantity: 0,
            type: 'lun din'
        },
        {
            name: 'Baked Potato',
            price: 3.50,
            quantity: 0,
            type: 'lun din'
        },
        {
            name: 'Smashed Potato',
            price: 1.99,
            quantity: 0,
            type: 'lun din'
        },
        {
            name: 'French Fries',
            price: 3.99,
            quantity: 0,
            type: 'lun din'
        },
        {
            name: 'Onion Rings',
            price: 6.99,
            quantity: 0,
            type: 'lun din'
        },
        {
            name: 'Home Fries',
            price: 3.99,
            quantity: 0,
            type: 'bre'
        },
        {
            name: 'Bacon',
            price: 1.99,
            quantity: 0,
            type: 'bre'
        },
        {
            name: 'Sausages',
            price: 3.99,
            quantity: 0,
            type: 'bre'
        },
        {
            name: 'Toast',
            price: 0.99,
            quantity: 0,
            type: 'bre'
        },
        {
            name: 'English Muffin',
            price: 1.50,
            quantity: 0,
            type: 'bre'
        },
        {
            name: 'Bagel',
            price: 2.76,
            quantity: 0,
            type: 'bre'
        }
    ];

    $scope.isServed = function (item, meal) {
        return $scope.selectedMeals.indexOf(meal) !== -1 && item.type.indexOf(meal) !== -1;
    };

    $scope.order = [];

    $scope.addToOrder = function (item) {
        var orderItem = angular.copy(item);
        if (orderItem.quantity) {
            for (var i = 0; i < $scope.order.length; i++) {
                if (orderItem.name === $scope.order[i].name) {
                    $scope.order[i].quantity += orderItem.quantity;
                    return;
                }
            }
            $scope.order.push(orderItem);
        } else {
            alert('Please enter a quantity greater than 0');
        }
        item.quantity = 0;
    };

    $scope.totalPrice = function () {
        var total = 0;
        angular.forEach($scope.order, function (item) {
            total += item.price * item.quantity;
        });
        return total;
    };

    $scope.remove = function (name) {
        for (var i = 0; i < $scope.order.length; i++) {
            if ($scope.order[i].name === name) {
                $scope.order.splice(i, 1);
                break;
            }
        }
    };

});