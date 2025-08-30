import { useEffect, useState } from '@wordpress/element';
import {
    BlockEditorKeyboardShortcuts,
    BlockEditorProvider,
    BlockList,
    BlockInspector,
    WritingFlow,
    BlockTools,
    ObserveTyping,
} from '@wordpress/block-editor';
import { Popover, SlotFillProvider } from '@wordpress/components';
import { registerCoreBlocks } from '@wordpress/block-library';
import '@wordpress/format-library';
import { useDispatch } from '@wordpress/data';
import { serialize } from '@wordpress/blocks';

// Additional imports and setups
import { setGlobals } from './utils';
// import './blocks';
registerCoreBlocks();
setGlobals();
import initialBlocks from './starter-blocks/breaking-news.json';

function App() {
    const [blocks, setBlocks] = useState(initialBlocks);
    const dispatch = useDispatch();

    const saveBlocks = () => {
        dispatch('core/block-editor').resetBlocks(blocks);
        console.log('Blocks saved to Gutenberg store:', blocks);
    };

    // Callback function when the editor is fully loaded
    const onEditorLoaded = () => {
        dispatch('core/block-editor').resetBlocks(blocks);
        console.log("Editor is fully loaded and ready.", djwp.data.select('core/block-editor').getBlocks());
        // Additional actions after the editor is loaded can be called here
    };

    // useEffect to trigger the onEditorLoaded callback
    useEffect(() => {
        onEditorLoaded();
    }, []);  // Empty dependency array ensures this runs once after initial render

    return (
        <div className="App">
            <div className="editor">
                <div className="action-buttons">
                    <button
                        className='components-button editor-post-publish-button is-secondary'
                        onClick={() => setBlocks(initialBlocks)}
                    >Clear Editor</button>
                    <button
                        className='components-button editor-post-publish-button is-primary'
                        onClick={saveBlocks}
                    >Save Editor</button>
                </div>
                <div className="playground editor-container">
                    <SlotFillProvider>
                        <BlockEditorProvider
                            value={blocks}
                            onInput={setBlocks}
                        >
                            <div className="playground__sidebar">
                                <BlockInspector/>
                            </div>
                            <div className="playground__content">
                                <BlockTools>
                                    <div className="editor-styles-wrapper">
                                        <BlockEditorKeyboardShortcuts/>
                                        <WritingFlow>
                                            <ObserveTyping>
                                                <BlockList/>
                                            </ObserveTyping>
                                        </WritingFlow>
                                    </div>
                                </BlockTools>
                            </div>
                            <Popover.Slot/>
                        </BlockEditorProvider>
                    </SlotFillProvider>
                </div>
            </div>
            <div className="playground__content saved_content">
                <h2>Gutenberg Markup:</h2>
                <pre>
                    {serialize(blocks)}
                </pre>
            </div>
            <div className="playground__content saved_content">
                <h2>Block Data:</h2>
                <pre>{JSON.stringify(blocks, null, 2)}</pre>
            </div>
        </div>
    );
}

export default App;
