console.log('ProductController')
app.controller('ProductController', function ($scope, $http) {
    let url = "http://localhost:8080/twobee/products"
    let token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0cnVuMTIyODk0QGdtYWlsLmNvbSIsImlhdCI6MTcxMTA4ODY0NywiZXhwIjoxNzExMTc1MDQ3fQ.5QgVoSX08SBI3GuYZW22dhg3CTrFz9LphMu-fUVaf9U";
    let header = {
        'Authorization': 'Bearer ' + token
    };
    // , { headers: header }
    $scope.listProducts = [];
    $scope.begin = 0;
    $scope.pageSize = 8;
    $http.get(url, { headers: header }).then(respone => {
        //console.log("success", respone.data);

    }).catch(err => {
        console.log("error", err);
    })

})