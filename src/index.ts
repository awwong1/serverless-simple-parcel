import Bundler from "parcel-bundler";
import Serverless from "serverless";

export default class ServerlessSimpleParcelPlugin {
  private serverless: Serverless;
  private hooks: { [hookName: string]: (watch?: boolean) => void | Promise<void> };

  constructor(serverless: Serverless) {
    this.serverless = serverless;
    this.hooks = {
      "before:offline:start:init": this.bundleWatch,
      "before:package:createDeploymentArtifacts": this.bundle,
      "before:deploy:function:packageFunction": this.bundle,
    };
  }

  /**
   * Used in live reloading during offline development (serverless-offline start)
   */
  public bundleWatch = async () => {
    await this.bundle(true);
  }

  /**
   * Bundle entries defined in serverless.yml configuration
   */
  public bundle = async (watch = false) => {
    this.serverless.cli.log("Bundling parcel entries...");
    const { custom: { parcel: { entries, options } } } = this.serverless.service;
    // Bundle each entry, given options
    for (const entry of entries) {
      const entryOptions = { ...options, watch, cache: false, ...entry };
      this.serverless.cli.log(JSON.stringify(entryOptions));
      const { name } = await new Bundler(entry.file, entryOptions).bundle();
      this.serverless.cli.log(`Bundled ${name}`);
    }
    this.serverless.cli.log("Done bundling all parcel entries!");
  }
}

module.exports = ServerlessSimpleParcelPlugin;
