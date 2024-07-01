// Function to calculate PAYE Tax based on Kenya's tax brackets for 2024
function calculatePAYE(grossSalary) {
    let tax = 0;
    if (grossSalary <= 24000) {
        tax = 0.1 * grossSalary;
    } else if (grossSalary <= 32333) {
        tax = 2400 + 0.25 * (grossSalary - 24000);
    } else if (grossSalary <= 40333) {
        tax = 5600 + 0.3 * (grossSalary - 32333);
    } else if (grossSalary <= 48333) {
        tax = 10000 + 0.32 * (grossSalary - 40333);
    } else if (grossSalary <= 57000) {
        tax = 14400 + 0.34 * (grossSalary - 48333);
    } else if (grossSalary <= 65333) {
        tax = 19360 + 0.36 * (grossSalary - 57000);
    } else if (grossSalary <= 79000) {
        tax = 25160 + 0.37 * (grossSalary - 65333);
    } else {
        tax = 33510 + 0.4 * (grossSalary - 79000);
    }
    return tax;
}

// Function to calculate NHIF Deductions based on Kenya's NHIF contributions
function calculateNHIF(grossSalary) {
    let nhif = 0;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else if (grossSalary <= 24999) {
        nhif = 750;
    } else if (grossSalary <= 29999) {
        nhif = 850;
    } else if (grossSalary <= 34999) {
        nhif = 900;
    } else if (grossSalary <= 39999) {
        nhif = 950;
    } else if (grossSalary <= 44999) {
        nhif = 1000;
    } else if (grossSalary <= 49999) {
        nhif = 1100;
    } else if (grossSalary <= 59999) {
        nhif = 1200;
    } else if (grossSalary <= 69999) {
        nhif = 1300;
    } else if (grossSalary <= 79999) {
        nhif = 1400;
    } else if (grossSalary <= 89999) {
        nhif = 1500;
    } else if (grossSalary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }
    return nhif;
}

// Function to calculate NSSF Deductions (pension) as per Kenya's NSSF contributions
function calculateNSSF(grossSalary) {
    const nssfRate = 0.06; // 6% of gross salary
    return nssfRate * grossSalary;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE tax
    const paye = calculatePAYE(grossSalary);

    // Calculate NHIF deductions
    const nhif = calculateNHIF(grossSalary);

    // Calculate NSSF deductions
    const nssf = calculateNSSF(grossSalary);

    // Calculate net salary
    const netSalary = grossSalary - paye - nhif - nssf;

    return {
        grossSalary: grossSalary,
        paye: paye,
        nhif: nhif,
        nssf: nssf,
        netSalary: netSalary
    };
}

// Example usage:
const basicSalary = 60000; // Example basic salary
const benefits = 10000; // Example benefits
const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary:", salaryDetails.grossSalary.toFixed(2));
console.log("PAYE Tax:", salaryDetails.paye.toFixed(2));
console.log("NHIF Deductions:", salaryDetails.nhif.toFixed(2));
console.log("NSSF Deductions:", salaryDetails.nssf.toFixed(2));
console.log("Net Salary:", salaryDetails.netSalary.toFixed(2));
