import { BladeController, FolderApi, View } from '@tweakpane/core';
import { Pane, BladeApi } from 'tweakpane';
import * as EssentialsPlugin from '@tweakpane/plugin-essentials';
import config from './config';


class TweakPanel {

    private pane: Pane;

    private main: FolderApi;
    private fpsGraph: any;
    private config: typeof config;

    private onChangeHandler: (config: typeof this.config) => any;

    /**
     * This tweak panel modify original config object
     * @param configObj 
     */
    public init(configObj: typeof config) {

        this.config = configObj;

        this.pane = new Pane();
        this.pane.registerPlugin(EssentialsPlugin);

        this.main = this.pane.addFolder({
            title: 'Parameters',
            expanded: true,
        });


        this.fpsGraph = this.main.addBlade({
            view: 'fpsgraph',
            label: 'fps',
            rows: 2,
        });

        this.main.on('change', (ev) => {
            if (this.onChangeHandler) {
                this.onChangeHandler(this.config);
            }
        });


        this.addBindings();
    }

    onChange(onChangeHandlerArg: (config: typeof this.config) => any) {
        this.onChangeHandler = onChangeHandlerArg;
    }


    addBindings() {
        this.main.addBinding(this.config, 'speed', {
            min: -2,
            max: 2,
            step: 0.1,
        });

        this.main.addBinding(this.config, 'noiseForce', {
            min: -2,
            max: 2,
            step: 0.1,
        });

        this.main.addBinding(this.config, 'noiseScale', {
            min: 0.001,
            max: 1,
        });
    }

    tickStart() {
        this.fpsGraph.begin();
    }

    tickEnd() {
        this.fpsGraph.end();
    }

}

export default TweakPanel;