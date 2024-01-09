import '@spectrum-web-components/accordion/sp-accordion.js';
import '@spectrum-web-components/accordion/sp-accordion-item.js';
import '@spectrum-css/fieldlabel/dist/index.css';
import './Sidebar.css'

const Sidebar = ({ addQuestion, importData, exportData }) => {

    return (
        <aside>
            <div className="heading">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 30 26" width="36px" xmlSpace="preserve" aria-hidden="true"> <path fill="#FA0F00" d="M19 0h11v26zM11.1 0H0v26zM15 9.6L22.1 26h-4.6l-2.1-5.2h-5.2z"></path> </svg>
                <h1 className="spectrum-Heading spectrum-Heading--sizeXS">Quiz Authoring Tool</h1>
            </div>
            <sp-accordion>
                <sp-accordion-item label="Import Existing Data">
                    <div>
                        <div className="spectrum-Form-item">
                            <div className="spectrum-Form-itemField">
                                <div className="spectrum-Textfield">
                                    <sp-textfield id="node-quizURL" placeholder="https://" ></sp-textfield>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="spectrum-Button spectrum-Button--fill spectrum-Button--primary spectrum-Button--sizeS" onClick={importData}>
                            <span className="spectrum-Button-label">Import Quiz</span>
                        </button>
                    </div>
                </sp-accordion-item>
                <sp-accordion-item label="Build New Quiz">
                    <div>
                        <button className="spectrum-Button spectrum-Button--fill spectrum-Button--primary spectrum-Button--sizeS" onClick={addQuestion}>
                            <span className="spectrum-Button-label">Add Question</span>
                        </button>
                    </div>
                </sp-accordion-item>
                <sp-accordion-item label="Export Quiz">
                    <div>
                        <button className="spectrum-Button spectrum-Button--fill spectrum-Button--primary spectrum-Button--sizeS" onClick={exportData}>
                            <span className="spectrum-Button-label">Export Quiz</span>
                        </button>
                    </div>
                </sp-accordion-item>
            </sp-accordion>
            <br />
        </aside>
    )
};
export default Sidebar