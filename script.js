document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
        tab.classList.remove('active');
    });

    const infoTab = document.getElementById('community');
    if (infoTab) {
        infoTab.style.display = 'block';
        infoTab.classList.add('active');
    }

    window.openCategory = function(evt, categoryName) {
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.style.display = 'none';
            tab.classList.remove('active');
        });
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        
        document.getElementById(categoryName).style.display = 'block';
        document.getElementById(categoryName).classList.add('active');
        evt.currentTarget.classList.add('active');
    }

    document.querySelectorAll('.doc-card-header').forEach(header => {
        header.addEventListener('click', () => {
            header.parentElement.classList.toggle('open');
        });
    });
});