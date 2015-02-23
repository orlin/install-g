#!/usr/bin/env batshit

load $(which batshit-helpers)

@test "all the dependencies install globally" {
  # seldom used modules
  npm uninstall -g daps fertilize #igdeps
  rm -rf ./test/deps/node_modules
  pushd ./test/deps

  # uninstall ok
  run which daps
  assert_failure

  npm install

  # this will be npm link-ed
  #run igdeps
  #assert_success
  #assert_output_contains "here's "

  # check for fertilize - "deps": ["wait-up@latest", "fertilize@latest"]

  # a dependency that installed itself globally due to its own install-g
  run which daps
  assert_success
  popd
}
