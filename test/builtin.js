/* jshint node:true */
/* global describe, it, beforeEach */

"use strict";

var typify = require("../lib/typify.js");
var assert = require("assert");

describe("regexp", function () {
  it("are RegExp objects", function () {
  	assert(typify.check("regexp", /foo/));
  	assert(typify.check("regexp", new RegExp("foo")));
  	assert(!typify.check("regexp", 1));
  });
});

describe("date", function () {
  it("are Date objects", function () {
  	assert(typify.check("date", new Date()));
  	assert(!typify.check("date", 1));
  });
});