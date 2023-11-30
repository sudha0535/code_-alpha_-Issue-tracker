function addIssue() {
  const issueDesc = document.getElementById('issueDesc').value;
  const priority = document.getElementById('priority').value;
  const assignee = document.getElementById('assignee').value;

  if (issueDesc.trim() !== '' && assignee.trim() !== '') {
      const issueList = document.getElementById('issueList');
      const li = document.createElement('li');
      li.innerHTML = `
          <strong>${issueDesc}</strong>
          <br>
          Priority: ${priority}, Assignee: ${assignee}
      `;
      issueList.appendChild(li);
      document.getElementById('issueForm').reset();
  }
}