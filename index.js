const Bundler = require("parcel-bundler");

class ServerlessPluginParcel {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;

    this.hooks = {
      "before:offline:start:init": this.bundleWatch.bind(this),
      "before:package:createDeploymentArtifacts": this.bundle.bind(this),
      "before:deploy:function:packageFunction": this.bundle.bind(this),
    };
  }

  async bundleWatch() {
    await this.bundle(true)
  }

  async bundle(watch) {
    this.serverless.cli.log("Bundling parcel entries...");

    const { custom } = this.serverless.service;
    const { entries, options } = custom.parcel;

    // bundle entries
    for (const entry of entries) {
      const entryOptions = Object.assign({ ...options, cache: false, watch: !!watch }, entry);
      this.serverless.cli.log(JSON.stringify(entryOptions))
      const bundler = new Bundler(entry.file, entryOptions);
      await bundler.bundle();
    }
  }
}

module.exports = ServerlessPluginParcel;
