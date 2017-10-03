'use strict';

describe('Controller: SearchCtrl', function () {
  beforeEach(module('giphySearchApp'));

    var controller, scope, httpBackend, sce;

  beforeEach(inject(function ($controller, $rootScope, $httpBackend, $sce) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    sce = $sce;
    controller = $controller('SearchCtrl', {
        $scope: scope,
        $http: httpBackend,
        $sce: sce
    });
    
  
    httpBackend.when('GET', 'https://api.giphy.com/v1/gifs/search?api_key="GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw"&q="baby%20elephants"').respond(200, '');
    httpBackend.when('GET', 'https://api.giphy.com/v1/gifs/search?api_key="ABCDEFGHIJKLMNOPQRSTUVWXYZ"&q="baby elephants"').respond(500, '');
  }));
    
 it('controller defined', function () {
    expect(controller).toBeDefined(); 
 });
    
  it('should be a test', function () {
     expect(scope.testing).toEqual('elephant');
  });

  it('should search for gifs matching phrase', function (scope) {
    jasmine.createSpy("searchGiphy").and.callThrough();
    scope.searchGiphy();
    httpBackend.expectGET('https://api.giphy.com/v1/gifs/search?api_key="GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw"&q="baby elephants"');
    httpBackend.flush();
  });
    
 it('should fail authentication for wrong api key', function () {
     jasmine.createSpy("searchGiphy").and.callThrough();
     scope.searchGiphy();
     httpBackend.expectGET('https://api.giphy.com/v1/gifs/search?api_key="ABCDEFGHIJKLMNOPQRSTUVWXYZ"&q="baby elephants"');
     httpBackend.flush();
 });
});