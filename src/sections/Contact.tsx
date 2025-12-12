"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Phone, CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import Container from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";

export const Contact: React.FC = () => {
  // Use environment variable for FormSpree ID
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "xannjgjz";
  const [state, handleSubmit] = useForm(formId);

  return (
    <Section id="contact" className="bg-card/30">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Let's Connect</span>
            </h2>
            <p className="text-text/70 max-w-2xl mx-auto">
              Ready to discuss your next project or explore automation opportunities? Let's talk!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Info */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4 md:space-y-6"
            >
              <div className="glass-effect rounded-xl p-5 md:p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a 
                      href="mailto:engr.arsalanjaved@gmail.com"
                      className="text-text/70 text-sm hover:text-primary transition-colors"
                    >
                      engr.arsalanjaved@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Phone className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a 
                      href="tel:+923315497500"
                      className="text-text/70 text-sm hover:text-accent transition-colors"
                    >
                      +92 331 5497500
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <MapPin className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-text/70 text-sm">Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 space-y-4"
            >
              {state.succeeded ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="text-green-500" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-green-500">Message Sent!</h3>
                  <p className="text-text/70 text-center">
                    Thanks for reaching out! I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 bg-background/50 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 bg-background/50 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-2 bg-background/50 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={state.submitting}
                    className="w-full gap-2"
                  >
                    {state.submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
