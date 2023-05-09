<script>
    function toggleContent() {
    var content = document.getElementById("about-me-content");
    var link = document.getElementById("about-me-link");
    if (content.style.display === "none") {
    content.style.display = "block";
    link.innerHTML = "Close";
    document.body.style.backgroundImage = "url('background2.jpg')";
} else {
    content.style.display = "none";
    link.innerHTML = "About me";
    document.body.style.backgroundImage = "url('background1.jpg')";
}
}
</script>