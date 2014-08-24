Package.describe({
  summary: "Paginate anything with a few lines of code"
});

Package.on_use(function (api, where) {
  api.add_files('pagination.js', 'client');
  api.export('Pagination', 'client');
});

Package.on_test(function (api) {
  api.use(['pagination', 'tinytest', 'test-helpers'], 'client');
  api.add_files('pagination_tests.js', 'client');
});
