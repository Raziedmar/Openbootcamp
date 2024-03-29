import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import{ Task } from '../../models/task.class'
import TaskComponent from '../pure/taskComponent';


const TaskListComponent = () => {

    const defaultTask = new Task("Example","Default Description",false,LEVELS.NORMAL);
    return (
        <div>
            <div>
                <h1>
                    Your Tasks:
                </h1>
                
            </div>
            <TaskComponent task={defaultTask}></TaskComponent>
            
        </div>
    );
};



export default TaskListComponent;
