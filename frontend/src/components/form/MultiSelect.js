import { useEffect, useState } from 'react';

const MultiSelect = ({ elements, keyProp, nameProp, activeProp, placeholderText, onChange }) => {
    const [selection, setSelection] = useState(elements);
    const onSelectEntry = (event) => {
        var entryKey = event.target.id;
        var updatedSelection = selection.map((entry) => {
            if (`${entry[keyProp]}` === `${entryKey}`) {
                return {
                    ...entry,
                    [activeProp]: !entry[activeProp],
                };
            } else {
                return entry;
            }
        });
        setSelection(updatedSelection);
        onChange(updatedSelection);
    };

    const onInputChange = (event) => {
        var inputContent = event.target.value.toLowerCase().trim();
        if (inputContent.length > 0) {
            var filteredEntries = elements.filter((entry) => entry[nameProp].toLowerCase().includes(inputContent));
            setSelection(filteredEntries);
        } else {
            setSelection(elements);
        }
    };

    useEffect(() => {
        setSelection(elements);
    }, [ elements ]);

    const getSelectedEntriesText = () => {
        var filteredSelection = selection
            .filter((entry) => entry[activeProp]);
        var selectedNames = filteredSelection
            .map((entry) => entry[nameProp])
            .join(', ');
        return `(${filteredSelection.length}) ` + selectedNames;
    };

    var placeholderLabel = selection.filter((entry) => entry[activeProp]).length > 0
        ? getSelectedEntriesText()
        : placeholderText;

    return (
        <div>
            <ul className='list-group dropdown'>
                <input type='text' className='list-group-item form-control dropdown-toggle' id='multi-select-filter-input' placeholder={ placeholderLabel } onChange={ onInputChange } data-bs-toggle='dropdown' aria-expanded='false' />
                <ul className='dropdown-menu w-100 overflow-y-scroll p-0' style={{ maxHeight: 300 }}>
                    {
                        (selection !== undefined) && (selection.length > 0)
                            ? selection.map((entry) =>
                                <li key={ entry[keyProp] } id={ `${entry[keyProp]}` }
                                    className={ `dropdown-item list-group-item ${entry[activeProp] === true ? 'active' : ''}` }
                                    onClick={ onSelectEntry } aria-current={ entry[activeProp] }>
                                    { entry[nameProp] }
                                </li>)
                            : <li key='none' className='dropdown-item list-group-item' >None</li>
                    }
                </ul>
            </ul>
        </div>
    );
};

export default MultiSelect;
