export default function PurchaseStep({ steps }) {
  return (
    <section>
      <div className="container py-12">
        <h3 className="py-6 text-xl font-semibold">How to Make it</h3>
        <div>
          {steps?.map((step, index) => (
            <div key={index} className="step">
              <h3>Step {index + 1}</h3>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
