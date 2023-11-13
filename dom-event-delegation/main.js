document.addEventListener('DOMContentLoaded', function () {
  const taskList = document.querySelector('.task-list');

  taskList.addEventListener('click', function (event) {
    const target = event.target;

    if (target.tagName === 'BUTTON') {
      const taskListItem = target.closest('.task-list-item');

      console.log(taskListItem);

      if (taskListItem) {
        taskListItem.remove();
      }
    }
  });
});
