let hideTimeout = null;

function showTooltip(element) {
    clearTimeout(hideTimeout);
    const tooltip = element.querySelector('.tooltip');
    tooltip.classList.add('show');
}

function hideTooltip(element) {
    const tooltip = element.querySelector('.tooltip');
    hideTimeout = setTimeout(() => {
        tooltip.classList.remove('show');
    }, 300);
}

function viewPDF(url) {
    window.open(url, '_blank');
}

function downloadPDF(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}