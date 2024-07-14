document.addEventListener("DOMContentLoaded", function() {
    const taskList = document.getElementById("task-list"); // 获取任务列表元素
    const newTaskInput = document.getElementById("new-task"); // 获取新任务输入框
    const addTaskButton = document.getElementById("add-task-button"); // 获取添加任务按钮
    const searchInput = document.getElementById("search"); // 获取搜索输入框

    let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // 从本地存储中获取任务列表，如果没有则初始化为空数组

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks)); // 将任务列表保存到本地存储
    }

    function renderTasks() {
        taskList.innerHTML = ""; // 清空任务列表
        const searchText = searchInput.value.toLowerCase(); // 获取搜索输入框的值并转换为小写
        tasks.forEach((task, index) => { // 遍历任务列表
            if (task.text.toLowerCase().includes(searchText)) { // 如果任务包含搜索文本，则显示该任务
                const taskItem = document.createElement("li"); // 创建任务列表项元素

                const taskText = document.createElement("span"); // 创建任务文本元素
                taskText.textContent = task.text; // 设置任务文本
                taskItem.appendChild(taskText); // 将任务文本添加到列表项

                const buttonContainer = document.createElement("div"); // 创建按钮容器
                buttonContainer.className = "button-container";

                const editButton = document.createElement("button"); // 创建编辑按钮
                editButton.textContent = "编辑";
                editButton.className = "edit-button";
                editButton.onclick = () => { // 设置编辑按钮的点击事件
                    const newText = prompt("Edit task:", task.text); // 弹出编辑对话框
                    if (newText !== null && newText.trim() !== "") { // 如果输入不为空
                        tasks[index].text = newText.trim(); // 更新任务文本
                        saveTasks(); // 保存任务列表
                        renderTasks(); // 重新渲染任务列表
                    }
                };
                buttonContainer.appendChild(editButton); // 将编辑按钮添加到按钮容器

                const deleteButton = document.createElement("button"); // 创建删除按钮
                deleteButton.textContent = "删除";
                deleteButton.className = "delete-button";
                deleteButton.onclick = () => { // 设置删除按钮的点击事件
                    tasks.splice(index, 1); // 从任务列表中删除任务
                    saveTasks(); // 保存任务列表
                    renderTasks(); // 重新渲染任务列表
                };
                buttonContainer.appendChild(deleteButton); // 将删除按钮添加到按钮容器

                taskItem.appendChild(buttonContainer); // 将按钮容器添加到列表项
                taskList.appendChild(taskItem); // 将列表项添加到任务列表
            }
        });
    }

    addTaskButton.addEventListener("click", function() { // 设置添加任务按钮的点击事件
        const newTaskText = newTaskInput.value.trim(); // 获取新任务输入框的值并去掉空格
        if (newTaskText !== "") { // 如果输入不为空
            tasks.push({ text: newTaskText }); // 将新任务添加到任务列表
            newTaskInput.value = ""; // 清空新任务输入框
            saveTasks(); // 保存任务列表
            renderTasks(); // 重新渲染任务列表
        }
    });

    searchInput.addEventListener("input", function() { // 设置搜索输入框的输入事件
        renderTasks(); // 重新渲染任务列表
    });

    renderTasks(); // 初始渲染任务列表
});


//返回主页
var home_return = document.getElementById("home-button");
home_return.onclick = function() {
    document.getElementById("home-page").click();
}

