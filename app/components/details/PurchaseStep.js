export default function PurchaseStep({ steps }) {
  return (
    <section>
      <div class="container py-12">
        <h3 class="font-semibold text-xl py-6">How to Make it</h3>
        <div>
          {steps?.map((step, index) => (
            <div key={index} class="step">
              <h3>Step {index + 1}</h3>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
