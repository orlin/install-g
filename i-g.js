var npm, pkg, unlessGloballyInstalled;

npm = require("npm");

pkg = process.env.npm_package_config_installg_pkg || process.env.npm_package_name;

if (!pkg) {
  console.error("Must use via package.json's scripts.install - defaults to name.");
  process.exit(1);
}

unlessGloballyInstalled = function(pkg, cb) {
  return npm.load(function(err, npm) {
    if (err != null) {
      console.error(err);
    }
    npm.config.set("json", true);
    npm.config.set("global", true);
    npm.config.set("depth", 0);
    return npm.commands.ls([pkg], true, function(err, data, lite) {
      if (err != null) {
        console.error(err);
      }
      if (Object.keys(lite).length === 0) {
        return cb(npm);
      }
    });
  });
};

unlessGloballyInstalled(pkg, function(npm) {
  console.log("Package " + pkg + " insists to be globally installed, please wait...");
  npm.config.set("global", true);
  npm.config.set("json", false);
  return npm.commands.install([pkg], function(err, data, lite) {
    if (err != null) {
      console.error(err);
    }
    return console.log();
  });
});
