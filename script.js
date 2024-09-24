function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Get form data
    const name = document.getElementById('name').value;
    const maritalStatus = document.getElementById('maritalStatus').value;
    const place = document.getElementById('place').value;
    const date = document.getElementById('date').value;
    const signature = document.getElementById('subscriber_signature').value;
    const accountNo = document.getElementById('accountNo').value;
    const witness = document.getElementById('witness').value;

    // Get nominee 1 details
    const nominee1_info = document.querySelector('textarea[name="nominee1_info"]').value;
    const nominee1_relation = document.querySelector('input[name="nominee1_relation"]').value;
    const nominee1_age = document.querySelector('input[name="nominee1_age"]').value;
    const nominee1_share = document.querySelector('input[name="nominee1_share"]').value;

    // Add content to PDF
    doc.text(`Form of Nomination [See Rule 5(1)]`, 10, 10);
    doc.text(`I, (Name): ${name}`, 10, 20);
    doc.text(`Marital Status: ${maritalStatus}`, 10, 30);

    // Nominee 1 details
    doc.text(`Nominee 1 Info:`, 10, 40);
    doc.text(`- Name, Address, Aadhar: ${nominee1_info}`, 10, 50);
    doc.text(`- Relationship: ${nominee1_relation}`, 10, 60);
    doc.text(`- Age: ${nominee1_age}`, 10, 70);
    doc.text(`- Share Payable: ${nominee1_share}%`, 10, 80);

    // Other details
    doc.text(`Place: ${place}`, 10, 90);
    doc.text(`Date: ${date}`, 10, 100);
    doc.text(`Subscriber's Signature: ${signature}`, 10, 110);
    doc.text(`Account No.: ${accountNo}`, 10, 120);
    doc.text(`Witnesses: ${witness}`, 10, 130);

    // Save PDF
    doc.save('Nomination_Form.pdf');
}
