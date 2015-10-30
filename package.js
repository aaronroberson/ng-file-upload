// Package metadata file for Meteor.js
var packageName = 'aaronroberson:ng-file-upload';
var where = 'client';
var version = '9.1.1';
var summary = 'Lightweight Angular directive to upload files. Packaged for Meteor including shim.';
var gitLink = 'https://github.com/aaronroberson/ng-file-upload';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);

  api.use('angular:angular@1.3.0', where)

  api.addFiles(['dist/ng-file-upload-all.js'], where);
}); 